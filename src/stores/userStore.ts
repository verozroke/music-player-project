import { defineStore } from "pinia";
import { Ref, ref } from "vue";
import { CreateUserDto, IPlaylist, ISong, IUser, LoginUserDto, PlaylistId, SongId } from './../interfaces';
import axios from 'axios'
import { useRouter } from 'vue-router';




export const useUserStore = defineStore('userStore', () => {
  const router = useRouter()
  const isProfileOpen = ref(false);

  const user: Ref<IUser> = ref({
    id: '1',
    name: 'verozroke',
    email: 'verozroke@gmail.com',
    favouriteSongIds: [] as SongId[],
    playlistIds: [] as PlaylistId[],
    createdAt: new Date(Date.now()),
    updatedAt: new Date(Date.now()),
  })

  const changeIsProfileOpen = (value: boolean): void => {
    isProfileOpen.value = value;
  }

  // вдруг понадобиться
  const getUserById = async (id: string): Promise<IUser> => {
    const { data } = await axios.get(`/users/${id}`)

    const { user }: { user: IUser } = data

    return user
  }


  const getUserByHash = async () => {

    const { data } = await axios.get(`/users/hash`, {
      withCredentials: true,
    })

    setUser(data.user)
  }

  const setUser = (newUser: IUser): void => {
    user.value = newUser
  }

  // FIXME: найти тайп для ивента
  const registerUser = async (e: any, { name, email, password }: CreateUserDto) => {
    e.preventDefault()

    const payload = {
      name: name,
      email: email,
      password: password,
    }


    try {
      const { data } = await axios.post('/auth/signup', payload)

      if (data.message === 'Signed up successfully') {
        router.push('/sign-in')
      }

    } catch (error: any) {
      const errorMessage = error.response.data.message

      if (errorMessage === 'Email already taken') {
        // toast
        return
      }

      // toast other
    }

  }

  const loginUser = async (e: any, { email, password }: LoginUserDto) => {

    e.preventDefault();
    const payload = {
      email: email,
      password: password,
    }

    try {
      const { data } = await axios.post('/auth/signin', payload)

      if (data.message === 'Signed in successfully') {
        router.push('/')
      }
      // FIXME: Find error type
    } catch (error: any) {
      const errorMessage = error.response.data.message

      if (errorMessage === 'Wrong credentials') {
        // toast
        return
      }

      if (errorMessage === 'Passwords does not match') {
        // toast
        return
      }


      // toast other
    }

  }

  const signOutUser = async (e: any) => {
    e.preventDefault();

    try {
      await axios.get('/auth/signout')
      router.push('/sign-in')
    } catch (error) {
      // some toast
    } finally {
    }
  }

  return {
    user,
    setUser,
    isProfileOpen,
    changeIsProfileOpen,

    // CRUD
    getUserByHash,
    getUserById,
    // auth
    loginUser,
    registerUser,
    signOutUser

  }
}, { persist: true })