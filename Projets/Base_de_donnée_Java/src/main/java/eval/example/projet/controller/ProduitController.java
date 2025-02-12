package eval.example.projet.controller;

import org.springframework.web.bind.annotation.*;

import eval.example.projet.model.Produit;
import eval.example.projet.service.ProduitService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/produits")
public class ProduitController {
    private final ProduitService produitService;

    public ProduitController(ProduitService produitService) {
        this.produitService = produitService;
    }

    @PostMapping
    public Produit addProduit(@RequestBody Produit produit) {
        return produitService.save(produit);
    }

    @GetMapping
    public List<Produit> getAllProduits() {
        return produitService.getAll();
    }

    @GetMapping("/{id}")
    public Optional<Produit> getProduitById(@PathVariable Long id) {
        return produitService.getById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteProduit(@PathVariable Long id) {
        produitService.deleteById(id);
    }
}