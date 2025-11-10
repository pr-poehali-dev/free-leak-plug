import { useState, useMemo } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState<'resources' | 'builds'>('resources');
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const resources = [
    {
      id: 1,
      name: 'EssentialsX',
      description: 'Основа любого сервера: команды для игроков, телепортация, варпы, экономика, киты и дома',
      type: 'Плагин',
      category: 'Утилиты',
      version: '2.20.1',
      downloads: '8.4M',
      image: '⚙️',
      gradient: 'from-blue-500 to-cyan-600',
      downloadUrl: 'https://www.spigotmc.org/resources/essentialsx.9089/'
    },
    {
      id: 2,
      name: 'WorldEdit',
      description: 'Мощнейший инструмент для редактирования мира: копирование, вставка, замена блоков командами',
      type: 'Плагин',
      category: 'Строительство',
      version: '7.2.15',
      downloads: '6.2M',
      image: '🛠️',
      gradient: 'from-emerald-500 to-teal-600',
      downloadUrl: 'https://dev.bukkit.org/projects/worldedit'
    },
    {
      id: 3,
      name: 'LuckPerms',
      description: 'Современная система прав и групп с веб-редактором, префиксами и удобным управлением',
      type: 'Плагин',
      category: 'Администрирование',
      version: '5.4.102',
      downloads: '7.1M',
      image: '🔐',
      gradient: 'from-violet-500 to-purple-600',
      downloadUrl: 'https://luckperms.net/download'
    },
    {
      id: 4,
      name: 'Vault',
      description: 'API библиотека для экономики, прав и чата - обязателен для работы большинства плагинов',
      type: 'Плагин',
      category: 'API',
      version: '1.7.3',
      downloads: '9.8M',
      image: '💰',
      gradient: 'from-amber-500 to-orange-600',
      downloadUrl: 'https://www.spigotmc.org/resources/vault.34315/'
    },
    {
      id: 5,
      name: 'ProtocolLib',
      description: 'Библиотека для работы с пакетами протокола - требуется для плагинов с анимациями и холограммами',
      type: 'Плагин',
      category: 'API',
      version: '5.1.0',
      downloads: '5.3M',
      image: '📡',
      gradient: 'from-indigo-500 to-blue-600',
      downloadUrl: 'https://www.spigotmc.org/resources/protocollib.1997/'
    },
    {
      id: 6,
      name: 'WorldGuard',
      description: 'Защита регионов и территорий, управление флагами мира, запрет PvP и защита от гриферов',
      type: 'Плагин',
      category: 'Защита',
      version: '7.0.9',
      downloads: '4.9M',
      image: '🛡️',
      gradient: 'from-red-500 to-rose-600',
      downloadUrl: 'https://dev.bukkit.org/projects/worldguard'
    },
    {
      id: 7,
      name: 'Citizens',
      description: 'Создание и настройка NPC с квестами, торговлей, диалогами и кастомным поведением',
      type: 'Плагин',
      category: 'Геймплей',
      version: '2.0.32',
      downloads: '3.7M',
      image: '🧙',
      gradient: 'from-pink-500 to-fuchsia-600',
      downloadUrl: 'https://www.spigotmc.org/resources/citizens.13811/'
    },
    {
      id: 8,
      name: 'PlaceholderAPI',
      description: 'Универсальные переменные для отображения статистики игроков в табе, табличках и скорборде',
      type: 'Плагин',
      category: 'API',
      version: '2.11.5',
      downloads: '6.5M',
      image: '📝',
      gradient: 'from-cyan-500 to-blue-600',
      downloadUrl: 'https://www.spigotmc.org/resources/placeholderapi.6245/'
    },
    {
      id: 9,
      name: 'CoreProtect',
      description: 'Логирование всех действий игроков с возможностью отката изменений и поиска гриферов',
      type: 'Плагин',
      category: 'Администрирование',
      version: '21.3',
      downloads: '2.8M',
      image: '📋',
      gradient: 'from-green-500 to-emerald-600',
      downloadUrl: 'https://www.spigotmc.org/resources/coreprotect.8631/'
    },
    {
      id: 10,
      name: 'Multiverse-Core',
      description: 'Создание и управление несколькими мирами на одном сервере с разными настройками',
      type: 'Плагин',
      category: 'Миры',
      version: '4.3.12',
      downloads: '3.2M',
      image: '🌍',
      gradient: 'from-teal-500 to-cyan-600',
      downloadUrl: 'https://dev.bukkit.org/projects/multiverse-core'
    },
    {
      id: 11,
      name: 'ChestShop',
      description: 'Торговые сундуки для игроков - продавайте и покупайте предметы через магазины',
      type: 'Плагин',
      category: 'Экономика',
      version: '3.12.2',
      downloads: '2.1M',
      image: '🏪',
      gradient: 'from-yellow-500 to-amber-600',
      downloadUrl: 'https://www.spigotmc.org/resources/chestshop.51856/'
    },
    {
      id: 12,
      name: 'AuthMe',
      description: 'Система регистрации и авторизации игроков для защиты аккаунтов на пиратских серверах',
      type: 'Плагин',
      category: 'Защита',
      version: '5.6.0',
      downloads: '4.2M',
      image: '🔑',
      gradient: 'from-orange-500 to-red-600',
      downloadUrl: 'https://www.spigotmc.org/resources/authmereloaded.6269/'
    },
    {
      id: 13,
      name: 'DeluxeMenu',
      description: 'Создание красивых кастомных GUI меню с анимациями, командами и условиями отображения',
      type: 'Плагин',
      category: 'Интерфейс',
      version: '1.13.8',
      downloads: '892K',
      image: '📱',
      gradient: 'from-purple-500 to-pink-600',
      downloadUrl: 'https://www.spigotmc.org/resources/deluxemenus.11734/'
    },
    {
      id: 14,
      name: 'BetterRTP',
      description: 'Случайная телепортация игроков с настройкой границ, биомов и безопасных зон',
      type: 'Плагин',
      category: 'Телепортация',
      version: '3.6.15',
      downloads: '647K',
      image: '🎲',
      gradient: 'from-blue-500 to-purple-600',
      downloadUrl: 'https://www.spigotmc.org/resources/betterrtp.36081/'
    },
    {
      id: 15,
      name: 'TPA',
      description: 'Запросы телепортации между игроками с таймером принятия и защитой от спама',
      type: 'Плагин',
      category: 'Телепортация',
      version: '5.2.1',
      downloads: '1.3M',
      image: '📍',
      gradient: 'from-green-500 to-teal-600',
      downloadUrl: 'https://www.spigotmc.org/resources/tpa.26593/'
    },
    {
      id: 16,
      name: 'TabList',
      description: 'Настройка таба с анимацией, переменными, группами и кастомным хедером/футером',
      type: 'Плагин',
      category: 'Интерфейс',
      version: '5.6.3',
      downloads: '1.8M',
      image: '📊',
      gradient: 'from-indigo-500 to-purple-600',
      downloadUrl: 'https://www.spigotmc.org/resources/tab.57806/'
    },
    {
      id: 17,
      name: 'GriefPrevention',
      description: 'Автоматическая защита территорий игроков с помощью золотой лопаты и приватов',
      type: 'Плагин',
      category: 'Защита',
      version: '16.18',
      downloads: '2.6M',
      image: '🔒',
      gradient: 'from-yellow-500 to-orange-600',
      downloadUrl: 'https://www.spigotmc.org/resources/griefprevention.1884/'
    },
    {
      id: 18,
      name: 'ClearLag',
      description: 'Очистка лишних предметов и мобов для снижения лагов и оптимизации сервера',
      type: 'Плагин',
      category: 'Оптимизация',
      version: '3.2.2',
      downloads: '3.1M',
      image: '🧹',
      gradient: 'from-cyan-500 to-blue-600',
      downloadUrl: 'https://www.spigotmc.org/resources/clearlagg.68271/'
    }
  ];

  const builds = [
    {
      id: 1,
      name: 'Сборка FunTime',
      description: 'Топовая копия сервера FunTime с полным набором плагинов, мини-играми и уникальными механиками',
      features: ['50+ плагинов', 'Мини-игры', 'Кастомные механики', 'Готовые конфиги'],
      size: '847 MB',
      version: '1.0',
      downloads: '12.4K',
      image: '🎮',
      downloadUrl: 'https://cloud.mail.ru/public/nNFX/Q7BoKLxeb'
    },
    {
      id: 2,
      name: 'Survival+ Сборка',
      description: 'Расширенный выживание с RPG элементами, кастомными мобами и данжами',
      features: ['RPG система', 'Кастомные мобы', 'Данжи', 'Квесты'],
      size: '512 MB',
      version: '2.3.1',
      downloads: '8.7K',
      image: '⚔️',
      downloadUrl: '#'
    },
    {
      id: 3,
      name: 'SkyBlock Ultimate',
      description: 'Полная сборка SkyBlock с экономикой, островами и челленджами',
      features: ['Острова', 'Экономика', 'Челленджи', 'Кооп режим'],
      size: '324 MB',
      version: '1.5.0',
      downloads: '15.2K',
      image: '🏝️',
      downloadUrl: '#'
    },
    {
      id: 4,
      name: 'Prison Mega Pack',
      description: 'Сборка для Prison серверов с рангами, шахтами и аукционом',
      features: ['Система рангов', 'Авто-шахты', 'Аукцион', 'PvP арены'],
      size: '428 MB',
      version: '3.1.2',
      downloads: '6.9K',
      image: '⛏️',
      downloadUrl: '#'
    }
  ];

  const categories = [
    { name: 'Все', icon: 'LayoutGrid' },
    { name: 'Утилиты', icon: 'Settings' },
    { name: 'Строительство', icon: 'Hammer' },
    { name: 'Администрирование', icon: 'Shield' },
    { name: 'API', icon: 'Code' },
    { name: 'Защита', icon: 'Lock' },
    { name: 'Геймплей', icon: 'Gamepad2' },
    { name: 'Миры', icon: 'Globe' },
    { name: 'Экономика', icon: 'DollarSign' },
    { name: 'Интерфейс', icon: 'Palette' },
    { name: 'Телепортация', icon: 'Navigation' },
    { name: 'Оптимизация', icon: 'Zap' }
  ];

  const filteredResources = useMemo(() => {
    return resources.filter(resource => {
      const matchesSearch = resource.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          resource.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'Все' || resource.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const filteredBuilds = useMemo(() => {
    return builds.filter(build => {
      return build.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
             build.description.toLowerCase().includes(searchQuery.toLowerCase());
    });
  }, [searchQuery]);

  const categoryCount = (catName: string) => {
    if (catName === 'Все') return resources.length;
    return resources.filter(r => r.category === catName).length;
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-gradient-to-br from-amber-400 via-orange-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20">
                <span className="text-2xl">💡</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 bg-clip-text text-transparent">
                  FreeLeak.pro
                </h1>
                <p className="text-xs text-muted-foreground">Minecraft плагины и сборки</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center gap-2">
              <Button 
                variant={activeSection === 'resources' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('resources')}
                className={activeSection === 'resources' ? 'bg-gradient-to-r from-orange-500 to-pink-500' : ''}
              >
                <Icon name="Layers" className="mr-2" size={18} />
                Ресурсы
              </Button>
              <Button 
                variant={activeSection === 'builds' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('builds')}
                className={activeSection === 'builds' ? 'bg-gradient-to-r from-orange-500 to-pink-500' : ''}
              >
                <Icon name="Package" className="mr-2" size={18} />
                Сборки
              </Button>
            </nav>

            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="hidden sm:flex">
                <Icon name="User" className="mr-2" size={16} />
                Войти
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-orange-500 to-pink-500 hover:opacity-90">
                <Icon name="Upload" className="mr-2" size={16} />
                Загрузить
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,146,60,0.15),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(236,72,153,0.15),transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-gradient-to-r from-orange-500/20 to-pink-500/20 text-orange-300 border-orange-500/30 backdrop-blur-sm">
              💡 Абсолютно бесплатно
            </Badge>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Плагины и сборки{' '}
              </span>
              <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 bg-clip-text text-transparent">
                для Minecraft серверов
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Лучшие плагины и готовые сборки серверов — всё для быстрого старта вашего проекта
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto mb-8">
              <div className="relative flex-1">
                <Icon name="Search" className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <Input 
                  placeholder="Поиск плагинов и сборок..." 
                  className="pl-12 h-12 md:h-14 text-base md:text-lg bg-card/50 border-border/50 backdrop-blur-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button 
                size="lg" 
                className="h-12 md:h-14 px-8 bg-gradient-to-r from-orange-500 to-pink-500 hover:opacity-90 shadow-lg shadow-orange-500/25"
              >
                <Icon name="Search" className="mr-2" size={20} />
                Найти
              </Button>
            </div>

            {activeSection === 'resources' && (
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((cat) => (
                  <Button 
                    key={cat.name} 
                    variant={selectedCategory === cat.name ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedCategory(cat.name)}
                    className={selectedCategory === cat.name 
                      ? 'bg-gradient-to-r from-orange-500 to-pink-500 border-0' 
                      : 'hover:bg-orange-500/10 hover:border-orange-500/50 transition-all backdrop-blur-sm'}
                  >
                    <Icon name={cat.icon as any} className="mr-2" size={16} />
                    {cat.name}
                    <Badge variant="secondary" className="ml-2 bg-muted/50">{categoryCount(cat.name)}</Badge>
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {activeSection === 'resources' && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    {selectedCategory === 'Все' ? '🔥 Все плагины' : `📦 ${selectedCategory}`}
                  </h3>
                  <p className="text-muted-foreground">
                    {filteredResources.length} {filteredResources.length === 1 ? 'плагин' : filteredResources.length < 5 ? 'плагина' : 'плагинов'} найдено
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                {filteredResources.map((resource) => (
                  <Card 
                    key={resource.id} 
                    className="group relative overflow-hidden border-border/50 hover:border-orange-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 bg-card/50 backdrop-blur-sm"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${resource.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300`}></div>
                    
                    <CardHeader className="pb-3">
                      <div className="flex items-start gap-3">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${resource.gradient} flex items-center justify-center text-2xl shadow-lg shrink-0`}>
                          {resource.image}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <CardTitle className="text-base md:text-lg group-hover:text-orange-500 transition-colors line-clamp-1">
                              {resource.name}
                            </CardTitle>
                          </div>
                          <Badge variant="outline" className="text-xs">{resource.category}</Badge>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="pb-3">
                      <CardDescription className="line-clamp-2 text-sm mb-3">
                        {resource.description}
                      </CardDescription>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Icon name="Download" size={14} />
                          <span>{resource.downloads}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="Package" size={14} />
                          <span>v{resource.version}</span>
                        </div>
                      </div>
                    </CardContent>

                    <CardFooter className="pt-3">
                      <Button 
                        className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:opacity-90 shadow-md"
                        onClick={() => window.open(resource.downloadUrl, '_blank')}
                      >
                        <Icon name="Download" className="mr-2" size={16} />
                        Скачать бесплатно
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              {filteredResources.length === 0 && (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold mb-2">Ничего не найдено</h3>
                  <p className="text-muted-foreground">Попробуйте изменить поисковый запрос или фильтр</p>
                </div>
              )}
            </div>
          )}

          {activeSection === 'builds' && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">📦 Готовые сборки</h3>
                  <p className="text-muted-foreground">
                    {filteredBuilds.length} {filteredBuilds.length === 1 ? 'сборка' : filteredBuilds.length < 5 ? 'сборки' : 'сборок'} найдено
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredBuilds.map((build) => (
                  <Card 
                    key={build.id} 
                    className="group hover:border-orange-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 bg-card/50 backdrop-blur-sm"
                  >
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center text-3xl shadow-lg shrink-0">
                          {build.image}
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2 group-hover:text-orange-500 transition-colors">
                            {build.name}
                          </CardTitle>
                          <CardDescription className="text-sm">
                            {build.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {build.features.map((feature) => (
                          <Badge key={feature} variant="secondary" className="bg-muted/50">
                            {feature}
                          </Badge>
                        ))}
                      </div>

                      <Separator />

                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <div className="text-muted-foreground text-xs mb-1">Размер</div>
                          <div className="font-medium">{build.size}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground text-xs mb-1">Версия</div>
                          <div className="font-medium">v{build.version}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground text-xs mb-1">Загрузки</div>
                          <div className="font-medium">{build.downloads}</div>
                        </div>
                      </div>
                    </CardContent>

                    <CardFooter className="gap-3">
                      <Button variant="outline" className="flex-1">
                        <Icon name="Info" className="mr-2" size={16} />
                        Подробнее
                      </Button>
                      <Button 
                        className="flex-1 bg-gradient-to-r from-orange-500 to-pink-500 hover:opacity-90 shadow-md"
                        onClick={() => {
                          if (build.downloadUrl !== '#') {
                            window.open(build.downloadUrl, '_blank');
                          }
                        }}
                      >
                        <Icon name="Download" className="mr-2" size={16} />
                        Скачать
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              {filteredBuilds.length === 0 && (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold mb-2">Ничего не найдено</h3>
                  <p className="text-muted-foreground">Попробуйте изменить поисковый запрос</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <footer className="border-t border-border mt-16 md:mt-24 py-12 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 bg-gradient-to-br from-amber-400 via-orange-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-xl">💡</span>
                </div>
                <span className="font-bold text-lg">FreeLeak.pro</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Бесплатные плагины и сборки для Minecraft серверов
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Ресурсы</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="hover:text-orange-500 cursor-pointer transition-colors">Плагины</div>
                <div className="hover:text-orange-500 cursor-pointer transition-colors">Сборки</div>
                <div className="hover:text-orange-500 cursor-pointer transition-colors">Моды</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="hover:text-orange-500 cursor-pointer transition-colors">Помощь</div>
                <div className="hover:text-orange-500 cursor-pointer transition-colors">FAQ</div>
                <div className="hover:text-orange-500 cursor-pointer transition-colors">Контакты</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Соцсети</h4>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="w-9 h-9 p-0 hover:bg-orange-500/10 hover:border-orange-500/50">
                  <Icon name="Github" size={16} />
                </Button>
                <Button size="sm" variant="outline" className="w-9 h-9 p-0 hover:bg-orange-500/10 hover:border-orange-500/50">
                  <Icon name="MessageCircle" size={16} />
                </Button>
              </div>
            </div>
          </div>
          
          <Separator className="mb-6" />
          
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 FreeLeak.pro — Все плагины бесплатны для использования</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
