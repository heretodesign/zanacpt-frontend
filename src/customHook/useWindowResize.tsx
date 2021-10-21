import React from 'react'

export const useWindowResize = (): number[] => {
    const [size, setSize] = React.useState([0, 0]);

    React.useLayoutEffect(() => {
        const updateSize = () => {
            setSize([window.innerWidth, window.innerHeight])
        }

        window.addEventListener("resize", updateSize)
        updateSize()
        return () => window.removeEventListener("resize", updateSize)
    }, [])

    return size;
}
