# Prometheus Monitoring Setup

This repository provides a basic setup for monitoring systems using Prometheus, an open-source systems monitoring and alerting toolkit.

## Overview

Prometheus is an open-source monitoring and alerting toolkit originally built at [SoundCloud](https://soundcloud.com). Since its inception in 2012, many companies and organizations have adopted Prometheus, and the project has a very active developer and user [community](https://prometheus.io/community). It collects and stores its metrics as time series data, where each data point is associated with a timestamp and optional key-value pairs called labels.

### Key Features of Prometheus:
- **Multi-dimensional data model:** Metrics are stored with time series identified by metric names and key-value pairs.
- **PromQL:** A flexible query language for leveraging dimensionality in data.
- **No reliance on distributed storage:** Single server nodes are autonomous.
- **Pull model over HTTP:** Time series data is collected via HTTP pull requests.
- **Pushing data support:** Can use an intermediary gateway for pushing data.
- **Service discovery:** Targets are discovered automatically through service discovery or static configuration.
- **Dashboard support:** Integration with multiple visualization tools for graphing and dashboarding.

## Requirements

To get started with this project, you need to have the following installed on your machine:

- [Prometheus](https://prometheus.io/docs/prometheus/latest/installation/)
- Docker (optional for running Prometheus in a container)
- A working service that exposes metrics (e.g., [Node Exporter](https://prometheus.io/docs/guides/node-exporter/))

## Setup and Installation

### Step 1: Clone this repository

```bash
https://github.com/Ethernos9/Prometheus_Monitoring.git

## Add prometheus.yml
