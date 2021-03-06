import { getAccessorType } from 'typed-vuex'

import * as user from '~/store/user'
import * as userInfo from '~/store/userInfo'
import * as userList from '~/store/userList'

export const state = () => ({})
export const getters = {}
export const mutations = {}
export const actions = {}

export const accessorType = getAccessorType({
    state,
    getters,
    mutations,
    actions,
    modules: {
        user,
        userInfo,
        userList
    },
})