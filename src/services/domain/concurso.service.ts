import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { ConcursoDTO } from "../../models/concurso.dto";
import { Observable } from "rxjs/Rx";

@Injectable()
export class ConcursoService {

    constructor(public http: HttpClient) {
    }

    findAll() : Observable<ConcursoDTO[]> {
        return this.http.get<ConcursoDTO[]>(`${API_CONFIG.baseUrl}/concursos`);
    }

    find(concurso_id: string) : Observable<ConcursoDTO> {
        console.log(`A requisição: ${API_CONFIG.baseUrl}/concursos/?${concurso_id} : ` + concurso_id);
        return this.http.get<ConcursoDTO>(`${API_CONFIG.baseUrl}/concursos/${concurso_id}`);
    }
}