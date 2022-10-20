COMPOSE_DEV=docker-compose -f docker-compose.yml

docker:
	$(COMPOSE_DEV) $(filter-out $@,$(MAKECMDGOALS))

lint:
	$(COMPOSE_DEV) up -d frontend
	$(COMPOSE_DEV) exec frontend npx eslint --fix 'src/**/*.{js,ts,tsx}'
	$(COMPOSE_DEV) exec frontend npx prettier --write .

test:
	$(COMPOSE_DEV) run -e CI=true --rm frontend npm test -- --colors $(filter-out $@,$(MAKECMDGOALS))

%: #Ignores unknown commands (and extra params)
	@:

