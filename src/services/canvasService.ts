import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';
import { ICanvasService } from '../interfaces/ICanvasService.interface';

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
