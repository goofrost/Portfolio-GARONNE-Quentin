package eval.example.projet.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDate;

@Entity
@Data
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String email;
    private String nom;
    private String prenom;
    private LocalDate dateNaissance;
    private LocalDate dateInscription;
}
