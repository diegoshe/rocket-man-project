from django.db import models


# class Album(models.Model):
#     album_title = models.CharField('Название', max_length=300)
#     genre = models.CharField('Жанр', max_length=100)
#     album_logo = models.CharField('Логотип', max_length=1000)
#     image = models.ImageField(upload_to='uploads/', verbose_name='image')

#     def __str__(self):
#         return self.album_title

#     class Meta:
#         verbose_name = 'Альбом'
#         verbose_name_plural = 'Альбомы'


class Soundtrack(models.Model):
    # album = models.ForeignKey(Album, on_delete=models.CASCADE)
    title = models.CharField('Название', max_length=50)
    genre = models.CharField('Жанр', max_length=100)
    description = models.CharField('Описание', max_length=250)
    date = models.DateField('Дата',auto_now_add=True)
    songfile = models.URLField('Трек', max_length = 200)
    image = models.ImageField('Логотип', upload_to='static/images/logo', null=True, blank=True)
    
    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Трек'
        verbose_name_plural = 'Треки'
        db_table = 'soundtracks'
