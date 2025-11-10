import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('plugins');
  const [searchQuery, setSearchQuery] = useState('');

  const trendingPlugins = [
    {
      id: 1,
      name: 'React Auth Pro',
      description: 'Complete authentication solution with JWT, OAuth2, and MFA support',
      version: '2.4.1',
      downloads: '45.2K',
      rating: 4.8,
      stars: 1243,
      category: 'Auth',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      name: 'API Gateway Lite',
      description: 'Lightweight API gateway with rate limiting and caching',
      version: '1.9.0',
      downloads: '32.1K',
      rating: 4.6,
      stars: 892,
      category: 'Backend',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      name: 'Chart Master',
      description: 'Beautiful, responsive charts and data visualization library',
      version: '3.2.5',
      downloads: '58.7K',
      rating: 4.9,
      stars: 2156,
      category: 'UI',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 4,
      name: 'File Upload Plus',
      description: 'Advanced file upload with drag-drop, previews, and cloud storage',
      version: '1.5.3',
      downloads: '28.4K',
      rating: 4.7,
      stars: 654,
      category: 'Utils',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 5,
      name: 'Database ORM Pro',
      description: 'TypeScript-first ORM with migrations and schema validation',
      version: '4.1.0',
      downloads: '67.3K',
      rating: 4.9,
      stars: 3421,
      category: 'Database',
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      id: 6,
      name: 'Email Templates',
      description: 'Production-ready email templates with inline CSS',
      version: '2.0.8',
      downloads: '19.6K',
      rating: 4.5,
      stars: 487,
      category: 'Templates',
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  const codeSnippets = [
    {
      id: 1,
      title: 'Custom React Hooks Collection',
      language: 'TypeScript',
      likes: 542,
      views: '8.2K'
    },
    {
      id: 2,
      title: 'Advanced Pagination Logic',
      language: 'JavaScript',
      likes: 328,
      views: '5.1K'
    },
    {
      id: 3,
      title: 'API Rate Limiter Middleware',
      language: 'Node.js',
      likes: 891,
      views: '12.4K'
    }
  ];

  const builds = [
    {
      id: 1,
      name: 'E-commerce Starter',
      description: 'Full-stack e-commerce with cart, payments & admin',
      tech: ['React', 'Node.js', 'PostgreSQL'],
      stars: 2341
    },
    {
      id: 2,
      name: 'SaaS Dashboard',
      description: 'Modern dashboard with analytics and user management',
      tech: ['Next.js', 'TypeScript', 'Prisma'],
      stars: 1876
    }
  ];

  const categories = [
    { name: 'All', icon: 'Grid3x3', count: 1247 },
    { name: 'Auth', icon: 'Shield', count: 89 },
    { name: 'Backend', icon: 'Server', count: 234 },
    { name: 'UI', icon: 'Palette', count: 456 },
    { name: 'Utils', icon: 'Wrench', count: 167 },
    { name: 'Database', icon: 'Database', count: 123 },
    { name: 'Templates', icon: 'FileCode', count: 178 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  FreeLeak.pro
                </h1>
                <p className="text-xs text-muted-foreground">Developer Resources Hub</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <Button variant="ghost" className="text-foreground hover:text-primary">
                <Icon name="Home" className="mr-2" size={18} />
                Главная
              </Button>
              <Button variant="ghost" className="text-foreground hover:text-primary">
                <Icon name="Package" className="mr-2" size={18} />
                Каталог
              </Button>
              <Button variant="ghost" className="text-foreground hover:text-primary">
                <Icon name="Code" className="mr-2" size={18} />
                Библиотека
              </Button>
              <Button variant="ghost" className="text-foreground hover:text-primary">
                <Icon name="Box" className="mr-2" size={18} />
                Сборки
              </Button>
            </nav>

            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Icon name="LogIn" className="mr-2" size={16} />
                Войти
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                <Icon name="Upload" className="mr-2" size={16} />
                Загрузить
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              🚀 Платформа для разработчиков
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent">
              Найди идеальные инструменты для своего проекта
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Плагины, коды, сборки — всё что нужно для быстрой разработки. Управление версиями, документация и поддержка сообщества.
            </p>
            
            <div className="flex gap-3 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Icon name="Search" className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <Input 
                  placeholder="Поиск по названию, тегам, коду..." 
                  className="pl-12 h-14 text-lg bg-card border-border/50"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button size="lg" className="h-14 px-8 bg-gradient-to-r from-primary to-secondary">
                Искать
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <Button 
                  key={cat.name} 
                  variant="outline" 
                  size="sm"
                  className="hover:bg-primary/10 hover:border-primary/50 transition-all"
                >
                  <Icon name={cat.icon as any} className="mr-2" size={16} />
                  {cat.name}
                  <Badge variant="secondary" className="ml-2">{cat.count}</Badge>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="plugins">
                <Icon name="Package" className="mr-2" size={18} />
                Плагины
              </TabsTrigger>
              <TabsTrigger value="codes">
                <Icon name="Code" className="mr-2" size={18} />
                Коды
              </TabsTrigger>
              <TabsTrigger value="builds">
                <Icon name="Box" className="mr-2" size={18} />
                Сборки
              </TabsTrigger>
            </TabsList>

            <TabsContent value="plugins" className="space-y-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">🔥 Топовые плагины</h3>
                <Button variant="ghost" className="text-primary">
                  Посмотреть все
                  <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {trendingPlugins.map((plugin) => (
                  <Card 
                    key={plugin.id} 
                    className="group relative overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${plugin.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                    
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="flex items-center gap-2 mb-2 group-hover:text-primary transition-colors">
                            {plugin.name}
                          </CardTitle>
                          <CardDescription className="line-clamp-2">
                            {plugin.description}
                          </CardDescription>
                        </div>
                        <Badge className={`bg-gradient-to-r ${plugin.gradient} text-white border-0 shrink-0`}>
                          {plugin.category}
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Icon name="Download" size={16} />
                          <span>{plugin.downloads}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="Star" size={16} className="fill-yellow-500 text-yellow-500" />
                          <span>{plugin.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="GitFork" size={16} />
                          <span>{plugin.stars}</span>
                        </div>
                      </div>
                    </CardContent>

                    <CardFooter className="flex items-center justify-between">
                      <code className="text-xs bg-muted px-2 py-1 rounded">v{plugin.version}</code>
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost">
                          <Icon name="Eye" size={16} />
                        </Button>
                        <Button size="sm" className="bg-gradient-to-r from-primary to-secondary">
                          <Icon name="Download" className="mr-2" size={16} />
                          Скачать
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="codes" className="space-y-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">💎 Популярные сниппеты</h3>
                <Button variant="ghost" className="text-primary">
                  Посмотреть все
                  <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {codeSnippets.map((snippet) => (
                  <Card key={snippet.id} className="hover:border-primary/50 transition-all">
                    <CardHeader>
                      <CardTitle className="text-lg">{snippet.title}</CardTitle>
                      <Badge variant="outline" className="w-fit">{snippet.language}</Badge>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Icon name="Heart" size={16} />
                          <span>{snippet.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="Eye" size={16} />
                          <span>{snippet.views}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" variant="outline">
                        <Icon name="Code" className="mr-2" size={16} />
                        Посмотреть код
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="builds" className="space-y-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">🎯 Готовые сборки</h3>
                <Button variant="ghost" className="text-primary">
                  Посмотреть все
                  <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {builds.map((build) => (
                  <Card key={build.id} className="hover:border-primary/50 transition-all">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        {build.name}
                        <div className="flex items-center gap-1 text-sm font-normal text-muted-foreground">
                          <Icon name="Star" size={16} className="fill-yellow-500 text-yellow-500" />
                          <span>{build.stars}</span>
                        </div>
                      </CardTitle>
                      <CardDescription>{build.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {build.tech.map((tech) => (
                          <Badge key={tech} variant="secondary">{tech}</Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="gap-2">
                      <Button className="flex-1" variant="outline">
                        <Icon name="Eye" className="mr-2" size={16} />
                        Демо
                      </Button>
                      <Button className="flex-1 bg-gradient-to-r from-primary to-secondary">
                        <Icon name="Download" className="mr-2" size={16} />
                        Скачать
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <footer className="border-t border-border mt-20 py-12 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <span className="text-xl">⚡</span>
                </div>
                <span className="font-bold text-lg">FreeLeak.pro</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Платформа для разработчиков. Делись кодом, находи решения, создавай лучше.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Ресурсы</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="hover:text-primary cursor-pointer">Документация</div>
                <div className="hover:text-primary cursor-pointer">API</div>
                <div className="hover:text-primary cursor-pointer">Сообщество</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="hover:text-primary cursor-pointer">О нас</div>
                <div className="hover:text-primary cursor-pointer">Блог</div>
                <div className="hover:text-primary cursor-pointer">Карьера</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Связь</h4>
              <div className="flex gap-3">
                <Button size="sm" variant="outline" className="w-10 h-10 p-0">
                  <Icon name="Github" size={18} />
                </Button>
                <Button size="sm" variant="outline" className="w-10 h-10 p-0">
                  <Icon name="Twitter" size={18} />
                </Button>
                <Button size="sm" variant="outline" className="w-10 h-10 p-0">
                  <Icon name="MessageCircle" size={18} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 FreeLeak.pro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
