package eval.example.projet.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import eval.example.projet.model.Client;

public interface ClientRepository extends JpaRepository<Client, Long> {
    Optional<Client> findByEmail(String email);
    void deleteByEmail(String email);
}
