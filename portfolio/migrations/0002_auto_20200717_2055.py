# Generated by Django 3.0.8 on 2020-07-17 17:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='soundtrack',
            name='songfile',
            field=models.URLField(verbose_name='Трек'),
        ),
    ]