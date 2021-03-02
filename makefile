install:
	npm install

run:
	nodemon start 


# migration rule
migrate:
	npx sequelize db:migrate

rollback:
	npx sequelize db:migrate:undo:all

create-migration:
	npx sequelize migration:create --name=$(name)

seed-create:
	npx sequelize seed:create --name=$(name)

seed:
	npx sequelize db:seed:all