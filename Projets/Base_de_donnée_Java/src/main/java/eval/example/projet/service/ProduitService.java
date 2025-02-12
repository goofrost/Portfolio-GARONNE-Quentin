package eval.example.projet.service;

import org.springframework.stereotype.Service;

import eval.example.projet.model.Produit;
import eval.example.projet.repository.ProduitRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ProduitService {
    private final ProduitRepository produitRepository;

    public ProduitService(ProduitRepository produitRepository) {
        this.produitRepository = produitRepository;
    }

    public Produit save(Produit produit) {
        return produitRepository.save(produit);
    }

    public List<Produit> getAll() {
        return produitRepository.findAll();
    }

    public Optional<Produit> getById(Long id) {
        return produitRepository.findById(id);
    }

    public void deleteById(Long id) {
        produitRepository.deleteById(id);
    }
}
