import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return await knex.schema.createTable("coingate_transaction_details", (table: Knex.CreateTableBuilder) => {
        table.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"));
        table.string("order_id");
        table.string("status");
        table.string("title").nullable();
        table.boolean("do_not_convert");
        table.string("orderable_id");
        table.string("price_currency");
        table.string("price_amount");
        table.boolean("lightning_network");
        table.string("receive_currency");
        table.string("receive_amount");
        table.dateTime("created_at");
        table.string("merchant_order_id");
        table.string("payment_url");
        table.string("underpaid_amount");
        table.string("overpaid_amount");
        table.boolean("is_refundable");
        table.text("refunds");
        table.text("voids");
        table.text("fees");
        table.string("token");
    });
}

export async function down(knex: Knex): Promise<void> {
    return await knex.schema.dropTableIfExists("coingate_transaction_details");
}
