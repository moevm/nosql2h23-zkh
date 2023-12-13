FROM neo4j:5.13.0-community-bullseye

#ENV APOC_VERSION=5.13.0
ENV NEO4J_PLUGINS='["apoc"]'
ENV NEO4J_apoc_export_file_enabled=true
ENV NEO4J_apoc_import_file_enabled=true
ENV NEO4J_apoc_import_file_use__neo4j__config=true
#RUN wget https://github.com/neo4j-contrib/neo4j-apoc-procedures/releases/download/${APOC_VERSION}/apoc-${APOC_VERSION}-extended.jar \
#    -P plugins/

COPY neo4j.conf conf/neo4j.conf


CMD ["neo4j"]