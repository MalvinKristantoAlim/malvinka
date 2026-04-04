import { motion } from 'motion/react';
import { Mail, Instagram, Linkedin, Github, MessageCircle } from 'lucide-react';

const contacts = [
  {
    name: 'Email',
    icon: <Mail size={20} />,
    value: 'malvinkristantoalim1@gmail.com',
    href: 'mailto:malvinkristantoalim1@gmail.com',
    color: 'hover:text-emerald-400'
  },
  {
    name: 'WhatsApp',
    icon: <MessageCircle size={20} />,
    value: '088226664102',
    href: 'https://wa.me/6288226664102',
    color: 'hover:text-green-400'
  },
  {
    name: 'Instagram',
    icon: <Instagram size={20} />,
    value: '@heymalvin_',
    href: 'https://instagram.com/heymalvin_',
    color: 'hover:text-pink-400'
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin size={20} />,
    value: 'Malvin K. A',
    href: 'https://linkedin.com/in/malvin-k-a',
    color: 'hover:text-blue-400'
  },
  {
    name: 'GitHub',
    icon: <Github size={20} />,
    value: 'MalvinKristantoAlim',
    href: 'https://github.com/MalvinKristantoAlim',
    color: 'hover:text-gray-100'
  }
];

  const contactVariants = {
    hidden: { opacity: 0, y: 30, rotateX: 10, perspective: 1000 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 80,
        damping: 12,
        mass: 1.2
      }
    })
  };

  const hoverEffect = {
    scale: 1.05,
    y: -10,
    rotateZ: 1,
    transition: { type: "spring", stiffness: 300, damping: 15 }
  };

export default function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-400">Let's collaborate on something amazing.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.name}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={hoverEffect}
              whileTap={{ scale: 0.98 }}
              className={`glass glass-hover p-6 flex items-center gap-4 group ${contact.color}`}
            >
              <div className="p-3 rounded-lg bg-emerald-accent/10 text-emerald-accent group-hover:bg-emerald-accent group-hover:text-obsidian transition-all duration-500 shadow-[0_0_0_rgba(16,185,129,0)] group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                {contact.icon}
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">{contact.name}</p>
                <p className="text-lg font-display">{contact.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
