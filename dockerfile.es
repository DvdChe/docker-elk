FROM ubuntu:latest

ENV APT_KEY_DONT_WARN_ON_DANGEROUS_USAGE=DontWarn

RUN apt-get update -y && \
    apt-get upgrade -y && \
    apt-get install -y curl gnupg
    


RUN curl -L https://artifacts.elastic.co/GPG-KEY-elasticsearch | apt-key add 
RUN echo "deb https://artifacts.elastic.co/packages/7.x/apt stable main" | tee -a /etc/apt/sources.list.d/elastic-7.x.list
RUN apt-get update && apt-get install -y elasticsearch

