export interface IGalleryService {
  getAllImages: () => void;
  getCertainImages: (user: string) => void;
}
