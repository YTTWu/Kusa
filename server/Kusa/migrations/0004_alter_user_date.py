# Generated by Django 3.2.8 on 2022-01-08 22:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Kusa', '0003_user_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='date',
            field=models.DateField(default='something'),
        ),
    ]
