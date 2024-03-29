# Используем официальный образ Node.js 20.11.0
FROM node:20.11.0

# Устанавливаем рабочую директорию
WORKDIR /app

# Устанавливаем переменные окружения
ENV DATABASE_URL=postgres://postgres.lcdtuijoqywxyrnzhssx:24Ref@mailggg@aws-0-eu-central-1.pooler.supabase.com:5432/postgres
ENV ACCESS_TOKEN_SECRET=secretA
ENV REFRESH_TOKEN_SECRET=secretR


# Копируем обе части приложения (клиентскую и серверную) в контейнер
COPY . .

# Установка зависимостей и сборка клиентской части
RUN cd client && npm ci && npm run build

# Установка зависимостей для серверной части
RUN cd server && npm ci

# Определяем порт, который будет прослушивать сервер
EXPOSE  8080

# Запускаем сервер при запуске контейнера
CMD [ "node", "server/app.js" ]
