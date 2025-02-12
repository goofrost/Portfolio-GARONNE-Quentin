package eval.example.projet.service;

import org.springframework.stereotype.Service;

import eval.example.projet.model.Client;
import eval.example.projet.repository.ClientRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ClientService {
    private final ClientRepository clientRepository;

    public ClientService(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    public Client save(Client client) {
        return clientRepository.save(client);
    }

    public List<Client> getAll() {
        return clientRepository.findAll();
    }

    public Optional<Client> getByEmail(String email) {
        return clientRepository.findByEmail(email);
    }

    public void deleteByEmail(String email) {
        clientRepository.deleteByEmail(email);
    }
}
