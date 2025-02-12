import tkinter as tk

def show_login_interface():
    # Afficher les éléments de connexion
    connexion_frame.pack(pady=40)
    connexion_label.pack()
    login_label.pack(pady=10)
    textbox_frame.pack()
    textbox.pack(pady=10)
    MDP_label.pack(pady=10)
    textbox2_frame.pack()
    textbox2.pack(pady=10)
    little_connexion_frame.pack(pady=20)
    little_connexion_button.pack()
    
def dismiss_interface():
    # Retire les éléments de connexion
    connexion_frame.pack_forget()
    connexion_label.pack_forget()
    login_label.pack_forget()
    textbox_frame.pack_forget()
    textbox.pack_forget()
    MDP_label.pack_forget()
    textbox2_frame.pack_forget()
    textbox2.pack_forget()
    little_connexion_frame.pack_forget()
    little_connexion_button.pack_forget()
    error_label.pack_forget()
    error2_label.pack_forget()
    main_interface_frame.pack_forget()
    welcome_label.pack_forget()
    button1_frame.pack_forget()
    project_button.grid_forget()
    container_button.grid_forget()
    button2_frame.pack_forget()
    history_button.pack_forget()
    button3_frame.pack_forget()
    description_button.pack_forget()
    container_interface_frame.pack_forget()
    
    # Clear des textbox
    textbox.delete(0, tk.END)
    textbox2.delete(0, tk.END)

def check_login():
    login_text = textbox.get()
    if login_text == "exemple":
        error_label.pack_forget()
        return True
    else:
        error_label.config(text="Erreur: Le login est incorrect", fg="red")
        error_label.pack(pady=5)
        textbox.delete(0, tk.END)
        textbox2.delete(0, tk.END)
        return False

def check_MDP():
    MDP_text = textbox2.get()
    if MDP_text == "exemple":
        error2_label.pack_forget()
        return True       
    else:
        error2_label.config(text="Erreur: Le MDP est incorrect", fg="red")
        error2_label.pack(pady=5)
        textbox2.delete(0, tk.END)
        textbox.delete(0, tk.END)
        return False

def connect(event=None):
    global connected_state
    if check_login() == True:
        if check_MDP() == True:
            print("Connecting...")
            dismiss_interface()
            show_main_interface()
            connected_state = True
            update_buttons()
            return True
    return False

def update_buttons():
    for widget in button_frame.winfo_children():
        widget.destroy()
    if connected_state:
        buttons = [("Home", show_main_interface), ("Setting", dismiss_interface), ("Credit", dismiss_interface), ("Deconnexion", disconnect)]
    else:
        buttons = [("Home", show_login_interface), ("Setting", dismiss_interface), ("Credit", dismiss_interface), ("Deconnexion", dismiss_interface)]
    for text, command in buttons:
        button = tk.Button(button_frame, text=text, bg="white", fg="black", bd=0, padx=20, pady=10, cursor="hand2", command=command)
        button.grid(row=0, column=buttons.index((text, command)), padx=30, pady=10)
        
def show_main_interface():
    # Masquer les autres interfaces
    dismiss_interface()
     
    # Interface quand on est connecté
    main_interface_frame.pack(pady=40)
    welcome_label.pack(pady=10, fill=tk.X)  # Élargir le rectangle blanc
    button1_frame.pack(pady=10)
    project_button.grid(row=0, column=0, padx=10)
    container_button.grid(row=0, column=1, padx=10)
    button2_frame.pack(pady=10)
    history_button.pack(padx=5)  # Élargir le rectangle blanc de 10 pixels (5 pixels de chaque côté)
    button3_frame.pack(pady=10)
    description_button.pack(pady=10, fill=tk.X)  # Élargir le rectangle blanc

def show_container_interface():
    dismiss_interface()  # Masquer les autres interfaces
    container_interface_frame.pack(pady=20)
    container_label.pack(pady=10)
    grid_frame.pack(pady=10)
    bottom_bar.pack(side=tk.BOTTOM, fill=tk.X)

def disconnect():
    global connected_state
    connected_state = False
    dismiss_interface()
    update_buttons()
    show_login_interface()

root = tk.Tk()
root.title("My Computer Screen")
root.configure(bg="black")

connected_state = False  # Variable globale pour suivre l'état de connexion

screen = tk.Frame(root, bg="black", padx=20, pady=20)
screen.pack()

button_frame = tk.Frame(screen, bg="black")
button_frame.pack(side=tk.TOP, pady=20)

# Initialisation des boutons
update_buttons()

# Barre connexion
connexion_frame = tk.Frame(screen, bg="white", padx=120, pady=10)
connexion_label = tk.Label(connexion_frame, text="Connexion", bg="white", fg="black", font=("Arial", 24))

# Texte login
login_label = tk.Label(screen, text="Login", bg="black", fg="white", font=("Arial", 20))

textbox_frame = tk.Frame(screen, bg="black")
textbox = tk.Entry(textbox_frame, bg="white", bd=0, font=("Arial", 20))

# Texte MDP
MDP_label = tk.Label(screen, text="MDP", bg="black", fg="white", font=("Arial", 20))

textbox2_frame = tk.Frame(screen, bg="black")
textbox2 = tk.Entry(textbox2_frame, bg="white", bd=0, font=("Arial", 20), show="*")

# Boutton connexion
little_connexion_frame = tk.Frame(screen, bg="white", padx=5, pady=5)
little_connexion_button = tk.Button(little_connexion_frame, text="Connexion", bg="white", fg="black", bd=0, font=("Arial", 10), cursor="hand2", command=connect)

# Barre bleue
bottom_bar = tk.Label(root, bg="#3498db", fg="white", height=6)
bottom_bar.pack(fill=tk.X, side=tk.BOTTOM)

# Message erreur
error_label = tk.Label(screen, bg="black", fg="red")
error2_label = tk.Label(screen, bg="black", fg="red")

# Cadre et étiquette de bienvenue
main_interface_frame = tk.Frame(screen, bg="black", padx=20, pady=20)
welcome_label = tk.Label(main_interface_frame, text="Bienvenue", bg="white", fg="black", font=("Arial", 24), width=30)  # Largeur ajustée

# Boutons supplémentaires
button1_frame = tk.Frame(main_interface_frame, bg="black")
project_button = tk.Button(button1_frame, text="Création d'un projet", bg="white", fg="black", font=("Arial", 20))
container_button = tk.Button(button1_frame, text="Consulter les conteneurs", bg="white", fg="black", font=("Arial", 20), command=show_container_interface)

button2_frame = tk.Frame(main_interface_frame, bg="black")
history_button = tk.Button(button2_frame, text="Historique", bg="white", fg="black", font=("Arial", 20))

button3_frame = tk.Frame(main_interface_frame, bg="black")
description_button = tk.Button(button3_frame, text="Description du projet", bg="white", fg="black", font=("Arial", 20), width=30)  # Largeur ajustée

# Interface de consultation des conteneurs
container_interface_frame = tk.Frame(screen, bg="black")

# Label principal pour les conteneurs
container_label = tk.Label(container_interface_frame, text="Consulter les conteneurs", bg="black", fg="white", font=("Arial", 24))

# Cadre pour la grille
grid_frame = tk.Frame(container_interface_frame, bg="black")

# Entêtes de la grille
headers = ["nom", "Date", "status", "connexion", "supprimer", "redémarrer", "Logs"]
for col, header in enumerate(headers):
    label = tk.Label(grid_frame, text=header, bg="white", fg="black", font=("Arial", 14))
    label.grid(row=0, column=col, padx=5, pady=5)

# Exemples de lignes dans la grille
for row in range(1, 4):
    for col in range(len(headers)):
        if col < 4:
            entry = tk.Entry(grid_frame, bg="white", font=("Arial", 12))
            entry.grid(row=row, column=col, padx=5, pady=5)
        else:
            button = tk.Button(grid_frame, text=headers[col], bg="white", fg="black", font=("Arial", 12))
            button.grid(row=row, column=col, padx=5, pady=5)

# Bind the Return (Enter) key to the connect function
root.bind('<Return>', connect)

root.mainloop()
