import {useUnityContext} from "react-unity-webgl";

const useDiscoFloor = () => {

    const {
        unityProvider,
        isLoaded,
        requestFullscreen,
        unload,
    } = useUnityContext({
        loaderUrl: "/Build/Web.loader.js",
        dataUrl: "/Build/Web.data",
        frameworkUrl: "/Build/Web.framework.js",
        codeUrl: "/Build/Web.wasm"
    });

    return {
        unityProvider,
        isLoaded,
        requestFullscreen,
        unload,
    }
}

export default useDiscoFloor;
