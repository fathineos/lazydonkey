.PHONY: start setup clean cli

all: upmake 

up:
	python webserver.py

start:
	python -m http.server 8000

setup:
	python -m venv .venv
	. .venv/bin/activate && pip install -e ".[dev]"

cli:
	. .venv/bin/activate && python -m lazydonkey.cli

clean:
	rm -rf .venv
	find . -type d -name "__pycache__" -exec rm -rf {} +
	find . -type f -name "*.pyc" -delete 