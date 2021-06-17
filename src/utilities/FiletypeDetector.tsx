export enum Filetype {
    Unknown,
    Image,
    Video
}
class FiletypeDetector {
    static GetFiletype(url: string): Filetype {
        const dot: number = url.lastIndexOf(".") + 1;
        const extension: string = url.substring(dot).toLowerCase();
        if (["png", "jpeg", "jpg", "gif"].includes(extension)) {
            return Filetype.Image;
        }
        else if (["mp4", "webm"].includes(extension)) {
            return Filetype.Video;
        }
        return Filetype.Unknown;
    }
}

export default FiletypeDetector;