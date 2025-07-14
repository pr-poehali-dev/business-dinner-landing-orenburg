import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-orange-500 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Бизнес-ужин nanoCAD
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Презентация • Демо • Нетворкинг
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <div className="flex items-center gap-2">
              <Icon name="MapPin" size={20} />
              <span>Оренбург</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Calendar" size={20} />
              <span>25 июля 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Clock" size={20} />
              <span>18:00 - 22:00</span>
            </div>
          </div>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold animate-scale-in" style={{animationDelay: '0.6s'}}>
            Зарегистрироваться
          </Button>
        </div>
      </section>

      {/* About nanoCAD Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">О nanoCAD</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Профессиональная платформа для проектирования с мощными инструментами САПР
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300 hover-scale">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Layers" size={32} className="text-blue-600" />
                </div>
                <CardTitle className="text-xl">2D/3D Проектирование</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Создание технических чертежей и 3D-моделей с высокой точностью
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 hover-scale">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-orange-600" />
                </div>
                <CardTitle className="text-xl">Командная работа</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Совместная работа над проектами в реальном времени
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 hover-scale">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Zap" size={32} className="text-green-600" />
                </div>
                <CardTitle className="text-xl">Автоматизация</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Автоматизация рутинных задач и повышение производительности
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Программа ужина</h2>
            <p className="text-xl text-gray-600">
              Насыщенная программа с презентациями, демо и нетворкингом
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start gap-6 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  18:00
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <Icon name="Coffee" size={20} />
                    Приветственный коктейль
                  </h3>
                  <p className="text-gray-600">
                    Знакомство участников, welcome-drink и легкие закуски
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  18:30
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <Icon name="Presentation" size={20} />
                    Презентация nanoCAD
                  </h3>
                  <p className="text-gray-600">
                    Обзор возможностей платформы и новых функций 2025
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  19:15
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <Icon name="Monitor" size={20} />
                    Живое демо
                  </h3>
                  <p className="text-gray-600">
                    Практическая демонстрация работы с реальными проектами
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  20:00
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <Icon name="Utensils" size={20} />
                    Ужин и нетворкинг
                  </h3>
                  <p className="text-gray-600">
                    Деловой ужин с обсуждением проектов и налаживанием связей
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-500">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Записаться на ужин</h2>
              <p className="text-xl text-white/90">
                Количество мест ограничено. Регистрация бесплатна.
              </p>
            </div>

            <Card className="bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Форма регистрации</CardTitle>
                <CardDescription className="text-center">
                  Заполните форму, и мы свяжемся с вами для подтверждения
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Имя *</Label>
                    <Input id="name" placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Label htmlFor="surname">Фамилия *</Label>
                    <Input id="surname" placeholder="Ваша фамилия" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="email@example.com" />
                </div>
                
                <div>
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" />
                </div>
                
                <div>
                  <Label htmlFor="company">Компания</Label>
                  <Input id="company" placeholder="Название вашей компании" />
                </div>
                
                <div>
                  <Label htmlFor="position">Должность</Label>
                  <Input id="position" placeholder="Ваша должность" />
                </div>
                
                <div>
                  <Label htmlFor="message">Комментарий</Label>
                  <Textarea id="message" placeholder="Расскажите о ваших интересах к nanoCAD" rows={3} />
                </div>
                
                <Button className="w-full bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white py-3 text-lg font-semibold">
                  Зарегистрироваться
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Контакты</h3>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (3532) 123-456
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@nanocad-orenburg.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Оренбург, ул. Советская, 1
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">О мероприятии</h3>
              <p className="text-gray-400">
                Бизнес-ужин посвящен современным решениям в области САПР и возможностям nanoCAD для профессионального проектирования.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Социальные сети</h3>
              <div className="flex gap-4">
                <Button variant="ghost" size="sm" className="text-white hover:text-blue-400">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:text-blue-400">
                  <Icon name="Twitter" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:text-blue-400">
                  <Icon name="Linkedin" size={20} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">
              © 2025 nanoCAD Бизнес-ужин. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;