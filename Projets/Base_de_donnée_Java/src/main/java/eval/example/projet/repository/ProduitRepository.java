package eval.example.projet.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import eval.example.projet.model.Produit;

public interface ProduitRepository extends JpaRepository<Produit, Long> {
    
}
