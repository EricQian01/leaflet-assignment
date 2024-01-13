import dynamic from '../../node_modules/next/dynamic';

const DynamicMap = dynamic(() => import('../../components/Map'), {ssr: false});


export default function Home() {
  return (
    <DynamicMap/>
  )
}
