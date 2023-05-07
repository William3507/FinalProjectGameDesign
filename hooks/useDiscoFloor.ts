import {useUnityContext} from "react-unity-webgl";

const useDiscoFloor = () => {

    const {
        unityProvider,
        isLoaded,
        requestFullscreen,
        unload,
    } = useUnityContext({
        loaderUrl: "/build/Web.loader.js",
        dataUrl: "/build/Web.data",
        frameworkUrl: "/build/Web.framework.js",
        codeUrl: "/build/Web.wasm"
    });

    return {
        unityProvider,
        isLoaded,
        requestFullscreen,
        unload,
    }
}

export default useDiscoFloor;