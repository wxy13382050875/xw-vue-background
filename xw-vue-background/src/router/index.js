import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [{
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    name: 'charts',
    component: Layout,
    redirect: '/charts',
    children: [{
      path: 'charts',
      name: '数据统计',
      component: () => import('@/views/charts/index'),
      meta: {
        title: '数据统计',
        icon: 'dashboard'
      }
    }]
  },



  {
    path: '/manage',
    component: Layout,

    children: [{
      path: 'index',
      name: 'manage',
      component: () => import('@/views/manage/index'),
      meta: {
        title: '档案管理',
        icon: 'form',
        roles: ['admin'] // or you can only set roles in sub nav
      }
    }]
  },
{
    path: '/manage/components',
    component: Layout,
    hidden: true,
    redirect: '/manage/components/index',
    children: [{
      path: 'index',
      name: 'rightTab',
      component: () => import('@/views/manage/components/index'),
      redirect: '/manage/components/index/add-questioning-remind',
      meta: {
        title: '',
        icon: 'form'
      },
      children: [
        {
          path: 'add-questioning-remind',
          hidden: true,
          name: 'add-questioning-remind',
          component: () => import('@/views/manage/components/add-questioning-remind'),
          meta: {
            title: '约谈提醒',
            icon: 'form'
          }
        },
        {
          path: 'add-petitio-letter',
          hidden: true,
          name: 'add-petitio-letter',
          component: () => import('@/views/manage/components/add-petitio-letter'),
          meta: {
            title: '信访举报',
            icon: 'form'
          }
        },
        {
          path: 'add-disciplinary-action',
          hidden: true,
          name: 'add-disciplinary-action',
          component: () => import('@/views/manage/components/add-disciplinary-action'),
          meta: {
            title: '问责处理、党政纪处分',
            icon: 'form'
          }
        },
        {
          path: 'add-daily-supervision',
          hidden: true,
          name: 'add-daily-supervision',
          component: () => import('@/views/manage/components/add-daily-supervision'),
          meta: {
            title: '日常监督',
            icon: 'form'
          }
        },
        {
          path: 'add-other-Integrity',
          hidden: true,
          name: 'add-other-Integrity',
          component: () => import('@/views/manage/components/add-other-Integrity'),
          meta: {
            title: '其他',
            icon: 'form'
          }
        },
        {
          path: 'add-party-Integrity',
          hidden: true,
          name: 'add-party-Integrity',
          component: () => import('@/views/manage/components/add-party-Integrity'),
          meta: {
            title: '党风廉政意见',
            icon: 'form'
          }
        },

      ]
    }]
  },


  // 404 page must be placed at the end !!!
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]
/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [

{
    path: '/dataEntry',
    component: Layout,
    children: [{
      path: 'index',
      name: 'dataEntry',
      component: () => import('@/views/dataEntry/index'),
      meta: {
        title: '录入档案',
        icon: 'form',
        roles: ['duty'] // you can set roles in root nav
      },

    }]
  },

  {
    path: '/dataEntry',
    component: Layout,
    hidden: true,
    children: [{
      path: 'add-user-info',
      name: 'add-user-info',
      component: () => import('@/views/dataEntry/components/add-user-info'),
      meta: {
        title: '基本信息',
        icon: 'form',
        roles: ['duty'] // you can set roles in root nav
      }
    }]
  },
  {
    path: '/dataEntry/components',
    component: Layout,
    hidden: true,
    redirect: '/dataEntry/components/index',
    children: [{
      path: 'index',
      name: 'rightTab',
      component: () => import('@/views/dataEntry/components/index'),
      redirect: '/dataEntry/components/index/add-user-info',
      meta: {
        title: '',
        icon: 'form',
        roles: ['duty'] // you can set roles in root nav
      },
      children: [{
          path: 'add-user-info',
          hidden: true,
          name: 'add-user-info',
          component: () => import('@/views/dataEntry/components/add-user-info'),
          meta: {
            title: '基本信息',
            icon: 'form',
            roles: ['duty'] // you can set roles in root nav
          }
        },
        {
          path: 'add-weddings-funerals',
          hidden: true,
          name: 'add-weddings-funerals',
          component: () => import('@/views/dataEntry/components/add-weddings-funerals'),
          meta: {
            title: '婚丧喜庆',
            icon: 'form',
            roles: ['duty'] // you can set roles in root nav
          },
        },
        {
          path: 'add-refuse-hand',
          hidden: true,
          name: 'add-refuse-hand',
          component: () => import('@/views/dataEntry/components/add-refuse-hand'),
          meta: {
            title: '拒收或上交',
            icon: 'form',
            roles: ['duty'] // you can set roles in root nav
          }
        },
        {
          path: 'add-annual-appraisal',
          hidden: true,
          name: 'add-annual-appraisal',
          component: () => import('@/views/dataEntry/components/add-annual-appraisal'),
          meta: {
            title: '年度考核',
            icon: 'form',
            roles: ['duty'] // you can set roles in root nav
          }
        },
        {
          path: 'add-annual-awards',
          hidden: true,
          name: 'add-annual-awards',
          component: () => import('@/views/dataEntry/components/add-annual-awards'),
          meta: {
            title: '年度获奖情况',
            icon: 'form',
            roles: ['duty'] // you can set roles in root nav
          }
        },
        {
          path: 'add-questioning-remind',
          hidden: true,
          name: 'add-questioning-remind',
          component: () => import('@/views/dataEntry/components/add-questioning-remind'),
          meta: {
            title: '约谈提醒',
            icon: 'form',
            roles: ['duty'] // you can set roles in root nav
          }
        },
        {
          path: 'add-departure-transfer',
          hidden: true,
          name: 'add-departure-transfer',
          component: () => import('@/views/dataEntry/components/add-departure-transfer'),
          meta: {
            title: '离职交接',
            icon: 'form',
            roles: ['duty'] // you can set roles in root nav
          }
        },
        {
          path: 'add-reporting-activities',
          name: 'add-reporting-activities',
          hidden: true,
          component: () => import('@/views/dataEntry/components/add-reporting-activities'),
          meta: {
            title: '述职述廉，民主测评',
            icon: 'form',
            roles: ['duty'] // you can set roles in root nav
          }
        },
        {
          path: 'add-life-would',
          hidden: true,
          name: 'add-life-would',
          component: () => import('@/views/dataEntry/components/add-life-would'),
          meta: {
            title: '生活会对照检查',
            icon: 'form',
            roles: ['duty'] // you can set roles in root nav
          }
        },

      ]
    }]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]
const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}
router.selfaddRoutes = function (params){
  router.matcher = new Router({mode: 'history'}).matcher;
  // resetRouter()
  // router.addRoutes(params)
  // console.log(router);
}
export default router
