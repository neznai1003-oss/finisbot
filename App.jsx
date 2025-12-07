import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  MessageSquare, Star, Crown, Settings, Bot, User, Send, 
  Sparkles, Lock, LogOut, BarChart, Users, Shield, 
  Zap, Moon, Sun, Home, CreditCard, Bell, X 
} from 'lucide-react'

// Компонент FinisGPT чата
const FinisGPTChat = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Привет! Я FinisGPT, ваш AI-помощник. Спросите меня о чем угодно!", isAI: true }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const sendMessage = () => {
    if (!input.trim()) return
    
    const userMsg = { id: Date.now(), text: input, isAI: false }
    setMessages([...messages, userMsg])
    setInput('')
    setIsTyping(true)
    
    setTimeout(() => {
      const responses = [
        "FinisGPT анализирует ваш запрос... Рекомендую активировать Premium для полного доступа!",
        "На основе ваших данных, вот оптимальное решение...",
        "Я создам для вас персонализированный план действий.",
        "Для этого задания вам понадобится: 1) Сбор данных 2) Анализ 3) Внедрение",
        "Ваш запрос обработан. Хотите экспортировать результаты?"
      ]
      const aiMsg = { 
        id: Date.now() + 1, 
        text: responses[Math.floor(Math.random() * responses.length)], 
        isAI: true 
      }
      setMessages(prev => [...prev, aiMsg])
      setIsTyping(false)
    }, 1500)
  }

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-lg">FinisGPT Pro</h3>
            <p className="text-sm text-gray-500">AI Assistant</p>
          </div>
          <div className="ml-auto bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
            <Zap className="w-3 h-3" /> Premium
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map(msg => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${msg.isAI ? 'justify-start' : 'justify-end'}`}
          >
            <div className={`max-w-[80%] rounded-2xl p-3 ${
              msg.isAI 
                ? 'bg-gray-100 dark:bg-gray-800' 
                : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
            }`}>
              {msg.text}
            </div>
          </motion.div>
        ))}
        
        {isTyping && (
          <div className="flex items-center gap-2 text-gray-500">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
            </div>
            FinisGPT печатает...
          </div>
        )}
      </div>

      <div className="p-4 border-t border-gray-200 dark:border-gray-800">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && sendMessage()}
            placeholder="Спросите FinisGPT..."
            className="flex-1 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            onClick={sendMessage}
            className="px-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl flex items-center justify-center"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

// Компонент системы звезд
const StarsSystem = () => {
  const [stars, setStars] = useState(1250)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-2xl p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl">
            <Star className="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-xl">Система Звезд</h3>
            <p className="text-gray-600 dark:text-gray-400">Зарабатывайте звезды</p>
          </div>
        </div>
        <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">{stars}</div>
      </div>

      <div className="space-y-3">
        {[
          { task: "Ежедневный вход", stars: 100, done: true },
          { task: "Чат с FinisGPT", stars: 250, done: true },
          { task: "Пригласить друга", stars: 500, done: false },
          { task: "Купить Premium", stars: 1000, done: false },
        ].map((item, idx) => (
          <div key={idx} className="flex items-center justify-between p-3 bg-white/50 dark:bg-gray-800/50 rounded-xl">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${item.done ? 'bg-green-100' : 'bg-gray-100'}`}>
                <Star className={`w-5 h-5 ${item.done ? 'text-green-600' : 'text-gray-400'}`} />
              </div>
              <div>
                <p className="font-medium">{item.task}</p>
                <p className="text-sm text-gray-500">+{item.stars} звезд</p>
              </div>
            </div>
            <button className={`px-3 py-1 rounded-full text-sm ${
              item.done 
                ? 'bg-green-100 text-green-700' 
                : 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white'
            }`}>
              {item.done ? 'Выполнено' : 'Начать'}
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

// Компонент Premium
const FinisPremium = () => {
  const [isPremium, setIsPremium] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900 rounded-2xl p-6 text-white"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-white/20 rounded-xl">
            <Crown className="w-8 h-8" />
          </div>
          <div>
            <h3 className="font-bold text-2xl">Finis Premium</h3>
            <p className="text-purple-200">$19.99/месяц</p>
          </div>
        </div>
      </div>

      <div className="space-y-3 mb-6">
        {[
          "Расширенный FinisGPT",
          "Безлимитные запросы",
          "Приоритетная поддержка",
          "Расширенная аналитика"
        ].map((feature, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <button
        onClick={() => setIsPremium(!isPremium)}
        className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 ${
          isPremium
            ? 'bg-white text-purple-900'
            : 'bg-gradient-to-r from-yellow-400 to-orange-400'
        }`}
      >
        {isPremium ? (
          <>
            <Crown className="w-6 h-6" />
            Premium активирован
          </>
        ) : (
          <>
            <Sparkles className="w-6 h-6" />
            Активировать Premium
          </>
        )}
      </button>
    </motion.div>
  )
}

// Админ панель
const AdminPanel = ({ isOpen, onClose }) => {
  const [password, setPassword] = useState('')
  const [isAuth, setIsAuth] = useState(false)

  const handleLogin = () => {
    if (password === 'ff99ff22zxc001') {
      setIsAuth(true)
    } else {
      alert('Неверный пароль!')
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-gray-900 rounded-2xl w-full max-w-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
        {!isAuth ? (
          <div className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-purple-500" />
              <div>
                <h3 className="text-2xl font-bold text-white">Админ панель</h3>
                <p className="text-gray-400">Введите пароль</p>
              </div>
            </div>
            
            <div className="relative mb-6">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleLogin()}
                className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Пароль"
              />
            </div>
            
            <button
              onClick={handleLogin}
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl"
            >
              Войти
            </button>
          </div>
        ) : (
          <div className="h-[500px] flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-gray-800">
              <div className="flex items-center gap-3">
                <Shield className="w-8 h-8 text-purple-500" />
                <div>
                  <h3 className="text-xl font-bold text-white">Панель управления</h3>
                  <p className="text-sm text-gray-400">FinisGram Admin</p>
                </div>
              </div>
              <button onClick={onClose} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 p-6 overflow-y-auto">
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: 'Пользователи', value: '12,543' },
                  { label: 'Premium', value: '892' },
                  { label: 'Звезды', value: '1.2M' },
                  { label: 'Запросы AI', value: '892K' },
                ].map((stat, idx) => (
                  <div key={idx} className="bg-gray-800 rounded-xl p-4">
                    <p className="text-sm text-gray-400">{stat.label}</p>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Действия</h4>
                <div className="grid grid-cols-2 gap-3">
                  <button className="p-4 bg-gray-800 rounded-xl text-white text-left hover:bg-gray-700">
                    <Users className="w-6 h-6 mb-2" />
                    <p>Пользователи</p>
                  </button>
                  <button className="p-4 bg-gray-800 rounded-xl text-white text-left hover:bg-gray-700">
                    <BarChart className="w-6 h-6 mb-2" />
                    <p>Аналитика</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// Главный App компонент
const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [activeTab, setActiveTab] = useState('chat')
  const [showAdmin, setShowAdmin] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gradient-to-br from-purple-50 to-pink-50'}`}>
      <div className="max-w-7xl mx-auto p-4">
        {/* Header */}
        <header className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  FinisGram Manager
                </h1>
                <p className="text-gray-500 dark:text-gray-400">AI Platform with FinisGPT</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-3 rounded-xl bg-gray-100 dark:bg-gray-700"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              <button
                onClick={() => setShowAdmin(true)}
                className="p-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white"
              >
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-24">
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg h-[600px]">
              <FinisGPTChat />
            </div>
          </div>
          
          <div className="space-y-6">
            <StarsSystem />
            <FinisPremium />
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2">
          <div className="flex gap-2 p-2 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
            {[
              { id: 'home', label: 'Главная', icon: Home },
              { id: 'chat', label: 'FinisGPT', icon: MessageSquare },
              { id: 'stars', label: 'Звезды', icon: Star },
              { id: 'premium', label: 'Premium', icon: Crown },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'text-gray-600 dark:text-gray-400'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <AdminPanel isOpen={showAdmin} onClose={() => setShowAdmin(false)} />
    </div>
  )
}

export default App