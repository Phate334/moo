import os
basedir = os.path.abspath(os.path.dirname(__file__))

class Config:
    SSL_REDIRECT = False
    @staticmethod
    def init_app(app):
        pass

class DockerConfig(Config):
    @classmethod
    def init_app(cls, app):
        pass


config = {
    'docker': DockerConfig
}