import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';

export interface ICanvasService {
  saveImage: (userId: string, email: string, image: string) => void;
}
class CanvasService implements ICanvasService {
  saveImage(userId: string, email: string, image: string) {
    return addDoc(collection(db, `images`), {
      userId: userId,
      email: email,
      image: image,
    });
  }
}

export const canvasService = new CanvasService();
