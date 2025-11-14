import { Html, useProgress } from "@react-three/drei"

const Loader = () => {
    const {progress} = useProgress();
  return (
    <Html center 
    className="font-bold text-xl text-center">
      {progress}% loaded
      </Html>
  )
}

export default Loader