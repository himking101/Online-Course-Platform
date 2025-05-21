import { Injectable } from '@angular/core';
import { UploadFileResponseDto } from './Dto/UploadFileResponseDto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  constructor(private http: HttpClient) {}

  postFile(file: FormData, userId: string): Observable<UploadFileResponseDto> {
    const folder = file.get('folder');
    const url: string = `files/upload?folder=${folder}?userId=${userId}`;
    return this.http.post<UploadFileResponseDto>(url, file);
  }
}
