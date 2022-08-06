import Directory from './components/directory/directory.component'

const App = () => {
  const categories = [
    {
      id: 1,
      title: '帽子',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png'
    },
    {
      id: 2,
      title: '外套',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png'
    },
    {
      id: 3,
      title: '運動鞋',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png'
    },
    {
      id: 4,
      title: '女裝',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png'
    },
    {
      id: 5,
      title: '男裝',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png'
    }
  ]
  return <Directory categories={categories} />
}

export default App
