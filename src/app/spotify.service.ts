import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  getHeader(query: string) {
    const url = "https://api.spotify.com/v1/" + query;
    let headers = new HttpHeaders();
    headers = headers.append(
      "Authorization",
      "Bearer BQCFS0afJ1M-je8JU4QQC8EetKrxOHiQErBQ6LwPQPOdAV0B6GZvB4OKQzy1os1ljFGScMrDDZi8V6x2fTl4-1-JijtypODSe7Wi-IMqlhBlt2YXrF-BFfeaADAEbmz5Y3a_jRUuqgBBsERLrn4eQTsT-TjYG16tJQ"
    );
    return this._http.get(url, { headers });
  }
  constructor(private _http: HttpClient) {}

  searchMusic(str: string, type = "artist") {
    const param = "&offset=0" + "&limit=20" + "&type=" + type + "&market=US";
    const query = "search?query=" + str + param;
    return this.getHeader(query);
  }
  getArtist(id: string) {
    const query = `artists/${id}`;
    return this.getArtist(query);
  }
}
