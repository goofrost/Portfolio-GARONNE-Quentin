<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AppFixtures extends Fixture
{
    protected $encoder;

    public function __construct(UserPasswordHasherInterface $encoder)
    {
        $this->encoder = $encoder;
    }
    public function load(ObjectManager $manager): void
    {
        $user = new User();
        $user->setNom('GARONNE')->setPrenom('Quentin');
        $user->setEmail('quentin.garonne@edu.igensia.com');
        $encoded = $this->encoder->hashPassword($user,'123');
        $user->setPassword($encoded);
        $user->setRoles(['ROLE_USER']);

        $admin = new User ();

        $encodedEmployee = $this->encoder->hashPassword($employee, '123');
        $employee->setNom('Dupont')->setPrenom('Jules')->setEmail('jules.dupont@gmail.com')->setPassword($encodedEmployee)->setRoles(['ROLE_EMPLOYEE']);

        $manager->persist($user);
        $manager->persist($admin);
        $manager->persist($employee);
        $manager->flush();
    }
}
