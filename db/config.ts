import { defineDb, defineTable, column } from 'astro:db';

const Author = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
  }
});

const Text = defineTable({
  columns: {
    name: column.text({unique: true}),
    content: column.text(),
    contentRu: column.text({optional: true}),
    contentEs: column.text({optional: true}),
    authorId: column.number({ references: () => Author.columns.id }),
  }
});

const User = defineTable({
  columns: {
    id: column.text({
      primaryKey: true
    }),
    name: column.text(),
    password: column.text()
  }
});

const Session = defineTable({
  columns: {
    id: column.text({
      primaryKey: true
    }),
    expiresAt: column.date(),
    userId: column.text({
      references: () => User.columns.id
    })
  }
});

// https://astro.build/db/config
export default defineDb({
  tables: {
    Author,
    Text,
    User,
    Session
  }
});
