package eval.example.projet.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Produit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    private double prixAchat;
    
    @Enumerated(EnumType.STRING)
    private TypeProduit type;

    public double getPrixVente() {
        double tva = 0.2; // 20% de TVA
        double prixFinal;
    
        switch (typeProduit) {
            case LIVRE:
            case HIGH_TECH:
                prixFinal = (prixAchat * 1.05) * (1 - tva);
                break;
            case BUREAU:
                prixFinal = (prixAchat + 100) * (1 - tva);
                break;
            default:
                throw new IllegalArgumentException("Type de produit inconnu");
        }
        return prixFinal;
    }
    
}

enum TypeProduit {
    LIVRE,
    EQUIPEMENT_HIGH_TECH,
    EQUIPEMENT_BUREAU
}
