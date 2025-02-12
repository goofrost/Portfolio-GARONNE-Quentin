package eval.example.projet.controller;

import org.springframework.web.bind.annotation.*;

import eval.example.projet.model.Client;
import eval.example.projet.service.ClientService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/clients")
public class ClientController {
    private final ClientService clientService;

    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }

    @PostMapping
    public Client addClient(@RequestBody Client client) {
        return clientService.save(client);
    }

    @GetMapping
    public List<Client> getAllClients() {
        return clientService.getAll();
    }

    @GetMapping("/{email}")
    public Optional<Client> getClientByEmail(@PathVariable String email) {
        return clientService.getByEmail(email);
    }

    @DeleteMapping("/{email}")
    public void deleteClient(@PathVariable String email) {
        clientService.deleteByEmail(email);
    }

}
