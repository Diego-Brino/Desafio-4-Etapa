import {useEffect, useState} from "react";
import theme from "../themes";
import {useTheme} from "@mui/system";


export default function useLayout (){

    const theme = useTheme();

    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {

        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, [])

    console.log(windowSize.width > theme.breakpoints['lg'] ? 'desktop' : 'mobile')

    return windowSize.width > theme.breakpoints['lg'] ? 'desktop' : 'mobile';
}