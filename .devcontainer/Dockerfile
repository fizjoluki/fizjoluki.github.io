FROM mcr.microsoft.com/devcontainers/base:ubuntu-24.04

ARG HUGO_VERSION=0.161.1
ARG TARGETARCH

RUN apt-get update \
    && export DEBIAN_FRONTEND=noninteractive \
    && apt-get install -y --no-install-recommends \
        ca-certificates \
        curl \
        git \
        make \
    && rm -rf /var/lib/apt/lists/*

RUN set -eux; \
    case "${TARGETARCH:-amd64}" in \
        amd64) hugo_arch="amd64" ;; \
        arm64) hugo_arch="arm64" ;; \
        *) echo "Unsupported architecture: ${TARGETARCH}" >&2; exit 1 ;; \
    esac; \
    curl -fsSL \
        -o /tmp/hugo.tar.gz \
        "https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-${hugo_arch}.tar.gz"; \
    tar -xzf /tmp/hugo.tar.gz -C /usr/local/bin hugo; \
    rm /tmp/hugo.tar.gz; \
    hugo version
