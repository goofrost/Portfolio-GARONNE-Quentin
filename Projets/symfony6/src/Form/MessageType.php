<?php

namespace App\Form;

use App\Entity\Message;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TelType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class MessageType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('email', EmailType::class, [
                'label' => 'Email adress',
                'attr' => ['placeholder' => 'Add your Email Adress'],
            ])
            ->add('phoneNumber', TelType::class, [
                'label' => 'Phone number',
                'attr' => ['placeholder' => 'Add your Phone Number'],
            ])
            ->add('message', TextareaType::class, [
                'label' => 'Your Message',
                'attr' => [
                    'placeholder' => 'Add your message here...',
                    'rows' => 5,
                ],
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Message::class,
        ]);
    }
}
