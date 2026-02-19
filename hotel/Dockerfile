# Use official Java image
FROM eclipse-temurin:17-jdk-alpine

# Install bash
RUN apk add --no-cache bash

# Set working directory
WORKDIR /app

# Copy files
COPY . .

# Give permission to mvnw
RUN chmod +x mvnw

# Build application
RUN ./mvnw clean package -DskipTests

# Expose port
EXPOSE 8080

# Run jar
CMD ["java", "-jar", "target/*.jar"]
