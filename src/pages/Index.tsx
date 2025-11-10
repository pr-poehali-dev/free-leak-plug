import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState<'resources' | 'builds'>('resources');

  const resources = [
    {
      id: 1,
      name: 'Ultra Presets Pack',
      description: 'Professional color grading presets for photos and videos',
      type: 'Preset',
      version: '3.2.1',
      downloads: '127K',
      price: 'Free',
      image: '🎨',
      gradient: 'from-violet-500 to-purple-600'
    },
    {
      id: 2,
      name: 'LightLeak Overlays Vol.1',
      description: 'High-quality light leak overlays for creative editing',
      type: 'Overlay',
      version: '2.0.0',
      downloads: '89K',
      price: 'Free',
      image: '✨',
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      id: 3,
      name: 'Cinematic LUTs Collection',
      description: 'Film-grade color lookup tables for video production',
      type: 'LUT',
      version: '1.5.4',
      downloads: '156K',
      price: 'Free',
      image: '🎬',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      id: 4,
      name: 'Advanced Retouching Plugin',
      description: 'Professional skin retouching and beauty tools',
      type: 'Plugin',
      version: '4.1.0',
      downloads: '73K',
      price: 'Free',
      image: '💎',
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      id: 5,
      name: 'Texture & Grain Pack',
      description: 'Film grain and texture overlays for authentic analog look',
      type: 'Texture',
      version: '2.3.2',
      downloads: '94K',
      price: 'Free',
      image: '📸',
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      id: 6,
      name: 'Color Wheels Pro',
      description: 'Advanced color grading wheels for precise control',
      type: 'Tool',
      version: '1.8.0',
      downloads: '61K',
      price: 'Free',
      image: '🌈',
      gradient: 'from-indigo-500 to-blue-600'
    }
  ];

  const builds = [
    {
      id: 1,
      name: 'Ultimate Photo Editor',
      description: 'Complete photo editing software with AI-powered tools',
      features: ['AI Enhancement', 'Batch Processing', 'RAW Support'],
      size: '248 MB',
      version: '5.2.1',
      downloads: '342K',
      image: '📷'
    },
    {
      id: 2,
      name: 'Video Color Suite',
      description: 'Professional video color grading and correction suite',
      features: ['Real-time Preview', 'LUT Support', 'HDR Grading'],
      size: '512 MB',
      version: '3.0.5',
      downloads: '198K',
      image: '🎥'
    },
    {
      id: 3,
      name: 'Creative Studio Bundle',
      description: 'All-in-one creative toolkit for photographers and videographers',
      features: ['Photo + Video', '1000+ Presets', 'Cloud Sync'],
      size: '1.2 GB',
      version: '2.1.0',
      downloads: '276K',
      image: '🎯'
    }
  ];

  const categories = [
    { name: 'All', icon: 'LayoutGrid', count: 847 },
    { name: 'Presets', icon: 'Palette', count: 234 },
    { name: 'Overlays', icon: 'Layers', count: 156 },
    { name: 'LUTs', icon: 'Film', count: 189 },
    { name: 'Plugins', icon: 'Puzzle', count: 98 },
    { name: 'Textures', icon: 'ImagePlus', count: 112 },
    { name: 'Tools', icon: 'Wrench', count: 58 }
  ];

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
                <p className="text-xs text-muted-foreground">Free Creative Resources</p>
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
                Профессиональные{' '}
              </span>
              <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 bg-clip-text text-transparent">
                ресурсы для креатива
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Пресеты, оверлеи, LUT-файлы, плагины и готовые сборки — всё что нужно для создания потрясающего контента
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto mb-8">
              <div className="relative flex-1">
                <Icon name="Search" className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <Input 
                  placeholder="Поиск пресетов, оверлеев, плагинов..." 
                  className="pl-12 h-12 md:h-14 text-base md:text-lg bg-card/50 border-border/50 backdrop-blur-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button size="lg" className="h-12 md:h-14 px-8 bg-gradient-to-r from-orange-500 to-pink-500 hover:opacity-90 shadow-lg shadow-orange-500/25">
                <Icon name="Search" className="mr-2" size={20} />
                Найти
              </Button>
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <Button 
                  key={cat.name} 
                  variant="outline" 
                  size="sm"
                  className="hover:bg-orange-500/10 hover:border-orange-500/50 transition-all backdrop-blur-sm"
                >
                  <Icon name={cat.icon as any} className="mr-2" size={16} />
                  {cat.name}
                  <Badge variant="secondary" className="ml-2 bg-muted/50">{cat.count}</Badge>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {activeSection === 'resources' && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">🔥 Популярные ресурсы</h3>
                  <p className="text-muted-foreground">Лучшие материалы для фото и видео</p>
                </div>
                <Button variant="ghost" className="text-orange-500 hover:text-orange-400">
                  Показать всё
                  <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                {resources.map((resource) => (
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
                            <Badge className="shrink-0 text-xs bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
                              {resource.price}
                            </Badge>
                          </div>
                          <Badge variant="outline" className="text-xs">{resource.type}</Badge>
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
                      <Button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:opacity-90 shadow-md">
                        <Icon name="Download" className="mr-2" size={16} />
                        Скачать бесплатно
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'builds' && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">📦 Готовые сборки</h3>
                  <p className="text-muted-foreground">Полноценные программы для работы</p>
                </div>
                <Button variant="ghost" className="text-orange-500 hover:text-orange-400">
                  Показать всё
                  <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {builds.map((build) => (
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
                      <Button className="flex-1 bg-gradient-to-r from-orange-500 to-pink-500 hover:opacity-90 shadow-md">
                        <Icon name="Download" className="mr-2" size={16} />
                        Скачать
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
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
                Бесплатные ресурсы для фотографов, видеографов и дизайнеров
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Ресурсы</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="hover:text-orange-500 cursor-pointer transition-colors">Пресеты</div>
                <div className="hover:text-orange-500 cursor-pointer transition-colors">Оверлеи</div>
                <div className="hover:text-orange-500 cursor-pointer transition-colors">LUT-файлы</div>
                <div className="hover:text-orange-500 cursor-pointer transition-colors">Плагины</div>
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
                  <Icon name="Twitter" size={16} />
                </Button>
                <Button size="sm" variant="outline" className="w-9 h-9 p-0 hover:bg-orange-500/10 hover:border-orange-500/50">
                  <Icon name="Instagram" size={16} />
                </Button>
              </div>
            </div>
          </div>
          
          <Separator className="mb-6" />
          
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 FreeLeak.pro — Все ресурсы бесплатны для личного и коммерческого использования</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
