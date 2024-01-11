type avatarSize = {
    width: number,
    height: number,
}

type avatarProps = {
    base: string,
    size: {
        xs: avatarSize,
        sm: avatarSize,
        base: avatarSize,
        lg: avatarSize,
        xl: avatarSize,
    }
    radius: {
        rounded: string,
        circle : string,
    }

}