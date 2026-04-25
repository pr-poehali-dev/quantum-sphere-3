import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import type { SectionProps } from "@/types"

function AboutSection({ isActive }: { isActive: boolean }) {
  const items = [
    { icon: "ShieldCheck", title: "Полная безопасность", text: "Все водители проходят строгую проверку: медицинский контроль, психологическое тестирование и верификацию документов." },
    { icon: "Zap", title: "Молниеносная подача", text: "Умный алгоритм выбирает ближайшего водителя. 97% заявок выполняется в течение 3 минут — даже в час пик." },
    { icon: "Star", title: "Высокий рейтинг", text: "Рейтинг 4.9 из 5 по отзывам клиентов. Мы работаем только с лучшими водителями города." },
  ]
  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
      <motion.h2
        className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight"
        initial={{ opacity: 0, y: 40 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        О нас
      </motion.h2>
      <motion.p
        className="text-neutral-400 text-lg md:text-xl max-w-xl mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        «Ракета» — сервис такси нового поколения, где скорость не идёт в ущерб безопасности.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            className="border border-[#7B61FF40] rounded-2xl p-6 bg-[#7B61FF08] backdrop-blur-sm"
            initial={{ opacity: 0, y: 40 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7B61FF] to-[#4FC3F7] flex items-center justify-center mb-4">
              <Icon name={item.icon} size={20} className="text-white" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function FleetSection({ isActive }: { isActive: boolean }) {
  const cars = [
    { name: "Эконом", price: "от 99 ₽", desc: "Доступные автомобили для быстрых поездок по городу", icon: "Car", color: "#4FC3F7" },
    { name: "Комфорт", price: "от 199 ₽", desc: "Просторные авто с кондиционером и зарядкой для телефона", icon: "CarFront", color: "#7B61FF" },
    { name: "Бизнес", price: "от 399 ₽", desc: "Премиальные автомобили для деловых поездок и встреч", icon: "Briefcase", color: "#A855F7" },
    { name: "Минивэн", price: "от 349 ₽", desc: "Вместительный транспорт для компании или большого багажа", icon: "Bus", color: "#06B6D4" },
  ]
  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
      <motion.h2
        className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight"
        initial={{ opacity: 0, y: 40 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Выберите свой класс
      </motion.h2>
      <motion.p
        className="text-neutral-400 text-lg md:text-xl max-w-xl mb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        4 типа автомобилей — для любой задачи и бюджета
      </motion.p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl">
        {cars.map((car, i) => (
          <motion.div
            key={car.name}
            className="border border-white/10 rounded-2xl p-5 bg-white/5 backdrop-blur-sm hover:border-[#7B61FF80] hover:bg-[#7B61FF08] transition-all cursor-pointer group"
            initial={{ opacity: 0, y: 40 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: car.color + "22" }}>
              <Icon name={car.icon} size={20} style={{ color: car.color }} />
            </div>
            <h3 className="text-white font-bold text-lg mb-1">{car.name}</h3>
            <p className="font-semibold text-sm mb-2" style={{ color: car.color }}>{car.price}</p>
            <p className="text-neutral-500 text-xs leading-relaxed">{car.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function ContactsSection({ isActive }: { isActive: boolean }) {
  const contacts = [
    { icon: "Phone", label: "Телефон", value: "+7 (800) 555-35-35", sub: "Бесплатно по России" },
    { icon: "MessageCircle", label: "Telegram", value: "@raketa_taxi", sub: "Пишите в любое время" },
    { icon: "Mail", label: "Email", value: "hello@raketa.taxi", sub: "Ответим в течение часа" },
    { icon: "MapPin", label: "Офис", value: "ул. Космонавтов, 1", sub: "Пн–Пт, 9:00–18:00" },
  ]
  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
      <motion.h2
        className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight"
        initial={{ opacity: 0, y: 40 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Свяжитесь с нами
      </motion.h2>
      <motion.p
        className="text-neutral-400 text-lg md:text-xl max-w-xl mb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        Работаем круглосуточно — поддержка всегда на связи
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
        {contacts.map((c, i) => (
          <motion.div
            key={c.label}
            className="flex items-center gap-4 border border-white/10 rounded-2xl p-5 bg-white/5 backdrop-blur-sm"
            initial={{ opacity: 0, x: -30 }}
            animate={isActive ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7B61FF] to-[#4FC3F7] flex items-center justify-center flex-shrink-0">
              <Icon name={c.icon} size={22} className="text-white" />
            </div>
            <div>
              <p className="text-neutral-500 text-xs mb-0.5">{c.label}</p>
              <p className="text-white font-semibold">{c.value}</p>
              <p className="text-neutral-500 text-xs">{c.sub}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default function Section({ id, title, subtitle, content, isActive, showButton, buttonText, custom }: SectionProps) {
  if (custom === 'about') return <AboutSection isActive={isActive} />
  if (custom === 'fleet') return <FleetSection isActive={isActive} />
  if (custom === 'contacts') return <ContactsSection isActive={isActive} />

  return (
    <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
      {subtitle && (
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {subtitle}
        </motion.div>
      )}
      <motion.h2
        className="text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-bold leading-[1.1] tracking-tight max-w-4xl text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      {content && (
        <motion.p
          className="text-lg md:text-xl lg:text-2xl max-w-2xl mt-6 text-neutral-400"
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {content}
        </motion.p>
      )}
      {showButton && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 md:mt-16"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#7B61FF] to-[#4FC3F7] text-white border-0 hover:opacity-90 transition-opacity text-base px-8 py-6"
          >
            {buttonText}
          </Button>
        </motion.div>
      )}
    </section>
  )
}
