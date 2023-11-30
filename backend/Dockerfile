#
# Build stage
#
FROM maven:3.8.7-openjdk-18-slim AS build
COPY src /home/app/src
COPY pom.xml /home/app
RUN mvn -f /home/app/pom.xml clean package -Dmaven.test.skip

#
# Package stage
#
FROM openjdk:18-slim-bullseye
COPY --from=build /home/app/target/backend-0.0.1-SNAPSHOT.jar /usr/local/lib/backend.jar
COPY --from=build /home/app/src/main/resources/neo4j /usr/local/lib/
ENTRYPOINT ["java","-jar","/usr/local/lib/backend.jar"]