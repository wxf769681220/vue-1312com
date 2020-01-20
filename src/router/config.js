const Index = () => import('components/index')

const Download = () => import('components/download')
const Sports = () => import('components/sports')
const Community = () => import('components/community')
const Mall = () => import('components/mall')
const Service = () => import('components/service')
const Register = () => import('components/register')
const ForgetPassword = () => import('components/forget-password')
const JoinUs = () => import('components/join-us')
const AboutUs = () => import('components/about-us')
const UserCenter = () => import('components/user-center')

// 外链组件
const RedEnvelopeGet = () => import('components/redEnvelopeGet')
const RedEnvelopeMobBind = () => import('components/redEnvelopeMobBind')
const WXGamePay = () => import('components/wxGamePay')
const GetCode = () => import('components/getCode')
const NewUser = () => import('components/newUser')
const GetWxCode = () => import('components/getWxCode')

const DownloadMob = () => import('components/downloadMob')

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: Index
  },
  {
    path: '/download',
    component: Download
  },
  {
    path: '/service/',
    component: Service,
    redirect: '/service/register',
    children: [
      {
        path: 'register',
        component: Register
      },
      {
        path: 'forgetPassword',
        component: ForgetPassword
      }
    ]
  },
  {
    path: '/userCenter',
    component: UserCenter
  },
  {
    path: '/sports',
    component: Sports
  },
  {
    path: '/mall',
    component: Mall
  },
  {
    path: '/community',
    component: Community
  },
  {
    path: '/service',
    component: Service
  },
  {
    path: '/joinUs',
    component: JoinUs
  },
  {
    path: '/joinUs',
    component: JoinUs
  },
  {
    path: '/aboutUs',
    component: AboutUs
  },
  {
    path: '/getCode',
    component: GetCode
  },
  {
    path: '/redEnvelopeGet',
    component: RedEnvelopeGet
  },
  {
    path: '/redEnvelopeMobBind',
    component: RedEnvelopeMobBind
  },
  {
    path: '/wxGamePay',
    component: WXGamePay
  },
  {
    path: '/newUser',
    component: NewUser
  },
  {
    path: '/getWxCode',
    component: GetWxCode
  },
  {
    path: '/downloadMob',
    component: DownloadMob
  }
]

export default routes
